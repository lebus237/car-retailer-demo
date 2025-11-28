import { BrandViewPage } from "@/views/catalog/BrandViewPage";
import { slugToString } from "@/lib/string/slug";
import { fetchCarModelsList } from "@/api";

export default async function Page({ params }: { params: any }) {
  const { id, slug } = await params;

  const models = await fetchCarModelsList(id);

  if (models.data) {
    console.log(models.data);
    return (
      <BrandViewPage
        yearList={models.data.anos.map((y: any) => ({
          id: y.codigo,
          name: y.nome,
        }))}
        modelList={models.data.modelos.map((item: any) => ({
          id: item.codigo,
          name: item.nome,
        }))}
        title={slugToString(slug)}
      />
    );
  }
  return (
    <BrandViewPage yearList={[]} modelList={[]} title={slugToString(slug)} />
  );
}
