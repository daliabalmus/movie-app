import React from "react";
import { DivUI } from "../../../core/components/ui/DivUI";
import { SpanUI } from "../../../core/components/ui/TextUI";
import { initialTheme } from "../../../core/theme/theme";

const DetailsList = ({ show }) => {
  return (
    <>
      {/* Genres */}
      {show?.genres?.length !== 0 && (
        <DivUI dFlex mb="12">
          <DivUI w="200">
            <SpanUI>Genres</SpanUI>
          </DivUI>
          <DivUI>
            <SpanUI color={initialTheme.light}>
              {show?.genres?.join(", ")}
            </SpanUI>
          </DivUI>
        </DivUI>
      )}

      {/* Status */}
      {show?.status && (
        <DivUI dFlex mb="12">
          <DivUI w="200">
            <SpanUI>Status</SpanUI>
          </DivUI>
          <DivUI>
            <SpanUI color={initialTheme.light}>{show?.status}</SpanUI>
          </DivUI>
        </DivUI>
      )}

      {/* Schedule */}
      {show?.schedule &&
        (show?.schedule?.days.length > 0 || show?.schedule?.time !== "") && (
          <DivUI dFlex>
            <DivUI w="200">
              <SpanUI>Schedule</SpanUI>
            </DivUI>
            <DivUI>
              <DivUI mb="12">
                <SpanUI>
                  {show?.schedule?.days?.length === 1 ? "Day:" : "Days:"}
                </SpanUI>{" "}
                <SpanUI color={initialTheme.light}>
                  {show?.schedule?.days?.join(", ")}
                </SpanUI>
              </DivUI>

              <DivUI>
                <SpanUI>Time:</SpanUI>{" "}
                <SpanUI color={initialTheme.light}>
                  {show?.schedule?.time}
                </SpanUI>
              </DivUI>
            </DivUI>
          </DivUI>
        )}
    </>
  );
};

export default DetailsList;
