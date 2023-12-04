import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    works: [{id: 1, text: 'learning redux toolkit'}]

}

export const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers: {
        addWork: (state, action) =>{
            const work = {
                id: nanoid(),
                text: action.payload
            }
            state.works.push(work);

        } ,
        removeWork: (state, action)=>{
            state.works = state.works.filter((i)=>
                i.id !== action.payload
            )
        },
        updateWork: (state, action) => {
            const { id, newText, /* other properties you want to update */ } = action.payload;
            
            // Use map to update the array
            state.works = state.works.map((work) =>
                work.id === id ? { ...work, text: newText /*, other properties */ } : work
            );
        }
    }
})
export const {addWork, removeWork} = workSlice.actions;
export default workSlice.reducer;
