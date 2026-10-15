"use client";

import React from "react";
import { Service } from "@/content/services";
import { UtilityServiceDetail } from "@/components/detail/UtilityServiceDetail";
import { DigitalServiceDetail } from "@/components/detail/DigitalServiceDetail";

interface ServiceDetailClientProps {
  service: Service;
  sameCategory: Service[];
  crossCategory: Service[];
}

export function ServiceDetailClient({
  service,
  sameCategory,
  crossCategory,
}: ServiceDetailClientProps) {
  if (service.group === "utilities") {
    return (
      <UtilityServiceDetail
        service={service}
        sameCategory={sameCategory}
        crossCategory={crossCategory}
      />
    );
  }

  return (
    <DigitalServiceDetail
      service={service}
      sameCategory={sameCategory}
      crossCategory={crossCategory}
    />
  );
}
