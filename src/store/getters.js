export const edittingArticle = state => {
  console.log(state.article.article);
  if(state.article.article.content) {
    let item = state.article.article;
    state.article.article.allow_remark = (item.allow_remark = 'y' ? true : false);
    state.article.article.sortop = (item.sortop = 'y' ? true : false);
    state.article.article.top = (item.top = 'y' ? true : false);
    return state.article.article;
  }
}
