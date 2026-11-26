# Archaemap – estrutura do site

```
index.html                 versão EN
pt/index.html              versão PT
assets/css/style.css       todo o CSS (partilhado pelas duas páginas)
assets/js/main.js          todo o JavaScript (carrossel)
assets/photos/             TODAS as fotos
   hero-1.jpg, hero-2.jpg, hero-3.jpg   carrossel do topo
   project.jpg                          secção "Sobre o projeto"
   banner.jpg                           faixa de "Em resumo"
   contact.jpg                          secção "Contacto"
   og-image.jpg                         imagem de partilha (1200x630)
   team/sara-prata.jpg, collaborator-1..3.jpg   equipa (circulares via CSS)
assets/icons/              favicon + ícones
robots.txt, sitemap.xml, site.webmanifest
```

## Como trocar uma foto
Substitua o ficheiro em `assets/photos/` mantendo o mesmo nome. Pode ser qualquer
proporção: as da equipa são recortadas automaticamente em círculo (ideal: quadrada, 480x480).

## Antes de publicar
1. Testar a partilha em https://developers.facebook.com/tools/debug/ e https://cards-dev.twitter.com/validator
