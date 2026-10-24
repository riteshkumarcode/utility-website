"use client";

import React from "react";
import { Service } from "@/content/services";
import { UtilityServiceDetail } from "@/components/detail/UtilityServiceDetail";
import { FinanceServiceDetail } from "@/components/detail/FinanceServiceDetail";
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

  if (service.group === "finance") {
    return (
      <FinanceServiceDetail
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
