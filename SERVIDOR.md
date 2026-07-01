# Infra Santino (montada 2026-07-01)

## Servidor — Vultr Cloud Compute, Santiago (Chile)
- IP pública: **64.176.23.38**
- Plan: vc2-2c-2gb (2 vCPU / 2 GB / 65 GB SSD) · Ubuntu 24.04 LTS
- Instance ID: e3fe1a3c-fa63-409d-9de8-9be3632b6e9b
- Acceso: `ssh -i C:\Users\ROG\.ssh\santino_vultr root@64.176.23.38`
  - (la SSH key la generé yo; sin passphrase)

## Coolify
- Panel: **http://64.176.23.38:8000**  (v4.1.2)
- El PRIMER usuario que se registre = admin/owner. **Créalo tú en el navegador.**
- Backup recomendado: `/data/coolify/source/.env` (guardar fuera del server).

## Pendiente
- [ ] Crear cuenta admin en Coolify (browser).
- [ ] Desplegar santino-store (Dockerfile ya listo) vía Coolify.
- [ ] Dominio santino.my → Cloudflare → A record a 64.176.23.38 + SSL.
- [ ] Llaves Flow (sandbox → prod) en env del servicio.
- [ ] Rotar la API key de Vultr (pasó por el chat).
