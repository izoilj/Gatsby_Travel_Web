import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"
// import styled from "styled-components"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
      // css={`
      //   color: #047bf1;
      // `}
      />
    ),
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
      // css={`
      //   color: #f3a82e;
      // `}
      />
    ),
    title: "1 Million Tip Made",
    desc: "Over 1 million trips completed last year",
  },
  {
    icon: (
      <MdTimer
      // css={`
      //   color: #f34f2e;
      // `}
      />
    ),
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
      // css={`
      //   color: #3af576;
      // `}
      />
    ),
    title: "Best Deals",
    desc: "We Offer the best prices",
  },
]
