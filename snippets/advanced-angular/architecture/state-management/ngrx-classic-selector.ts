export const selectForm = createSelector(
  (state: HeroState) => state.currentFormData,
  formData => formData,
);
