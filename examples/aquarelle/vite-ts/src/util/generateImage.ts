export const generateImage = async (prompt: string) => {
  // request is sent to simple express server to avoid exposing user token
  const response = await fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      negative_prompt: "",
      style_preset: "Watercolor",
      sampler: "LCM",
      checkpoint: "octoai:lcm_sdxl",
      steps: 4,
      cfg_scale: 1.3,
      width: 1024,
      height: 1024,
    }),
  });

  const result = await response.json();

  return result;
};
