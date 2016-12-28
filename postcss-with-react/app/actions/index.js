const modifyProduct = (desc, id) => ({
  type: 'MODIFY_PRODUCT',
  desc,
  id
});

export default {
  modifyProduct
};
