
export default function handler(req, res) {
  const { uid } = req.query;

  // Simulación: permitimos que todos los UID funcionen por ahora
  const isValid = uid && uid.length === 64;

  if (!isValid) {
    return res.status(403).json({ success: false, message: "Licencia inválida" });
  }

  return res.status(200).json({
    success: true,
    uid,
    plan: "premium",
    expiresAt: "2099-12-31T23:59:59Z"
  });
}
