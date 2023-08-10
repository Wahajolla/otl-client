import { Color, Spec } from '@/entities/product-specs';

export const color = (spec: Spec) => {
  const value = Object.fromEntries(
    spec.values.map((v) => [v.name, v.value])
  ) as unknown as Color;
  return (
    <>
      <div className=" flex flex-col justify-start">
        <div>
          <span>{value.name}</span>
        </div>
        <div className="align-items-center flex flex-row ">
          <span>RAL: {value.ralId} </span>
          <div
            style={{
              backgroundColor: value.hex,
            }}
            className={`ml-1 inline-block h-4 w-4 rounded`}
          ></div>
        </div>
      </div>
    </>
  );
};
