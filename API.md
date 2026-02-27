# API Reference

## GET /health
Returns status payload.

## GET /avatar.svg
Query params:
- `seed` (string, required logically)
- `size` (number, default 256)
- `theme` (midnight|forest|sunset|matrix)
- `initials` (string)

Example:
`/avatar.svg?seed=Jane%20Doe&theme=matrix&size=320`
