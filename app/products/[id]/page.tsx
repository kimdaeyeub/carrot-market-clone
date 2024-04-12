async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
}
const ProductDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getProduct();
  return <div>ProductDetail {id}</div>;
};

export default ProductDetail;
