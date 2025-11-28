const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchBrandsList = async () => {
  try {
    const response = await fetch(`${baseUrl}/carros/marcas`);

    if (!response.ok) {
      console.error(response.statusText);
      return {
        error: "An error occurred while fetching the brands list.",
      };
    }
    return {
      data: await response.json(),
    };
  } catch (error: any) {
    console.error(error);
    return {
      error: "An error occurred while fetching the brands list.",
    };
  }
};

export const fetchCarModelsList = async (brandId: string) => {
  try {
    const response = await fetch(`${baseUrl}/carros/marcas/${brandId}/modelos`);

    if (!response.ok) {
      console.error(response.statusText);
      return {
        error: "An error occurred while fetching the brands list.",
      };
    }
    return {
      data: await response.json(),
    };
  } catch (error: any) {
    console.error(error);
    return {
      error: "An error occurred while fetching the brands list.",
    };
  }
};

export const fetchCarYearModelsList = async (
  modelId: string,
  brandId: string,
) => {
  try {
    const response = await fetch(
      `${baseUrl}/carros/marcas/${brandId}/modelos/${modelId}/anos`,
    );
    if (!response.ok) {
      console.error(response.statusText);
      return {
        error: "An error occurred while fetching the brands list.",
      };
    }
    return {
      data: await response.json(),
    };
  } catch (error: any) {
    console.error(error);
    return {
      error: "An error occurred while fetching the brands list.",
    };
  }
};

export const fetchCarYearModel = async (
  brandId: string,
  modelId: string,
  yearModelId: string,
) => {
  try {
    const response = await fetch(
      `${baseUrl}/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearModelId}`,
    );
    if (!response.ok) {
      console.error(response.statusText);
      return {
        error: "An error occurred while fetching the car.",
      };
    }
    return {
      data: await response.json(),
    };
  } catch (error: any) {
    console.error(error);
    return {
      error: "An error occurred while fetching the car.",
    };
  }
};
