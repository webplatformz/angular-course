export const heroReducer = createReducer(
  initialState,
  on(updateForm, (state, { formData }) => ({
    ...state,
    currentFormData: formData,
    heroes: [...state.heroes, formData as Hero],
  })),
);
