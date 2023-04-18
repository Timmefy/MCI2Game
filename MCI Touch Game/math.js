export function add(v, w) {
    return { x: v.x + w.x, y: v.y + w.y };
}

export function sub(v, w) {
    return { x: v.x - w.x, y: v.y - w.y };
}

export function scale(r, v) {
    return { x: r * v.x, y: r * v.y };
}

export function distance(p, q) {
    return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
}

export function dotProduct(v, w) {
    return v.x * w.x + v.y * w.y;
}