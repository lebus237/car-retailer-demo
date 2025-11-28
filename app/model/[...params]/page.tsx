import { slugToString } from "@/lib/string/slug";
import { ModelViewPage } from "@/views/catalog/ModelViewPage";
import { fetchCarYearModelsList } from "@/api";

export default async function Page({ params }: { params: any }) {
  const {
    params: [model, brand, slug],
  } = await params;

  const models = await fetchCarYearModelsList(model, brand);

  if (models?.data) {
    return (
      <ModelViewPage
        yearList={models?.data.map((y: any) => ({
          id: y.codigo,
          name: y.nome,
        }))}
        title={slugToString(slug)}
      />
    );
  }
  return <ModelViewPage yearList={[]} />;
}
