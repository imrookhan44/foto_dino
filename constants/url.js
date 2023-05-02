// const host = "dino-foto.de";
// const host = "foto-dino.com";
// const host = "foto-dino.de";

export const getApiUrl = () => {
  const domain = window.location.hostname;
  switch (domain) {
    case "localhost":
      return "https://api.dino-foto.de";
    case "next.dino-foto.de":
      return "https://api.dino-foto.de";
    case "next.foto-dino.com":
      return "https://api.foto-dino.com";
    case "next.foto-dino.de":
      return "https://api.foto-dino.de";
    default:
      return "https://api.foto-dino.de";
  }
};

export const getHost = () => {
  const host = window.location.hostname;
  if (host.includes("localhost")) return "dino-foto.de";
  if (host.includes("dino-foto.de")) return "dino-foto.de";
  if (host.includes("foto-dino.com")) return "foto-dino.com";
  if (host.includes("foto-dino.de")) return "foto-dino.de";
};

export const getProtocol = () => {
  const host = window.location.hostname;
  if (host.includes("localhost")) return "http";
  else return "https";
};

// Images
export const IMAGE_URL = "https://assets.foto-dino.de/images";
