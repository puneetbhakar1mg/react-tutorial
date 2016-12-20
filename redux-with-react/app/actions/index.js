const fetchCategory = () => ({ type: 'FETCH_CATEGORY' });

const fetchProduct = () => ({ type: 'FETCH_PRODUCT' });
const modifyProduct = desc => ({
  type: 'MODIFY_PRODUCT',
  desc
});

export default {
  fetchCategory,
  fetchProduct,
  modifyProduct
};
