// pages/api/get-wokan-sid.js
export default function handler(req: any, res: any) {
  const sid = process.env.SID; // Obtén el SID

  // Aquí puedes devolver solo la información que necesitas
  res.status(200).json({ sid });
}
