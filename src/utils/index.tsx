import { infos } from "./infos";

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function redirectToWhatsapp(message = "Olá, eu gostaria de saber mais sobre os serviços!") {
  window.open(`https://wa.me/${infos.whatsapp}?text=${message}`, '_blank');
}

export function redirectToInstagram() {
  window.open(`https://www.instagram.com/${infos.instagram}/`, '_blank');
}

export function redirectToFacebook() {
  window.open(`https://www.facebook.com/${infos.facebook}`, '_blank');
}