export async function login(email: string, password: string) {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return res.ok;
}
