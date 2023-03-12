"use client";

import React from "react";
import Select from "react-select";
import useSWR from "swr";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);

  const { data: model, mutate: setModal } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div>
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
      />
    </div>
  );
};

export default ModelSelection;
