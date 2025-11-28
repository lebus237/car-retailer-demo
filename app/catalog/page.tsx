import { CatalogViewPage } from "@/views/catalog/CatalogViewPage";
import { fetchBrandsList } from "@/api";

export default async function Catalog() {
  const brands = await fetchBrandsList();

  if (brands.data) {
    return (
      <div>
        <CatalogViewPage
          brandList={brands.data.map((brand: any) => ({
            id: brand.codigo,
            name: brand.nome,
          }))}
        />
      </div>
    );
  }

  return <CatalogViewPage brandList={[]} />;
}
