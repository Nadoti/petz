

export type CityDataType = {
  name: string;
  url: string;
}

export type CityType = {
  locations: CityDataType[] | undefined;
  main_generation: CityDataType | undefined;
}