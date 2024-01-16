export const generateImage = async (prompt: string) => {
  // request is sent to simple express server to avoid exposing user token
  const response = await fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      negative_prompt: "Blurry, distortion, low-res, poor quality",
      style_preset: "base",
      sampler: "DPM_PLUS_PLUS_2M_KARRAS",
      // TODO: Replace asset id with name once API supports that
      // loras: { cereal_box_sdxl_v1: 1 },
      loras: { asset_01hkbzksv0ev2v2bf2nxf348ee: 1 },
      steps: 20,
      cfg_scale: 7.5,
      use_refiner: true,
      width: 832,
      height: 1216,
    }),
  });

  const result = await response.json();

  return result;
};
