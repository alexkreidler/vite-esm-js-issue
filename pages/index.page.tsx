import React from "react";

import * as schema from "compassql/build/src/schema";

import covidData from "../data.json"

const { build, Schema } = schema

// This is an overly simplified example that doesn't do much itself,
// in fact it may not work at runtime. But simply getting it to compile, run and then emit an error would be great!
const covidSchema = new Schema(covidData.schema as any)

export { Page };

function Page() {
  return (
    <>
    <h1>Hello world</h1>
    {covidSchema.tableSchema().fields.map((f) => <p>{f.name}</p>)}
    </>
  );
}
