# 📝 Lessons about Managing Sessions and Hashing Passwords

## 1. Managing Sessions with Passport
- To manage sessions, we use **Passport** as a middleware.
- When a user logs in:
  - Passport calls `passport.use()` with a strategy (e.g., **LocalStrategy**) to check whether the username and password are correct.
  - If successful, Passport creates a session.

### 2. `serializeUser` and `deserializeUser`
- **`serializeUser`**: stores the `user.id` in the session when a login is successful.
- **`deserializeUser`**: on every request, Passport takes the `id` from the session and looks up the full user in the database → verifies that the request is coming from the authenticated user.

---

## 2. Hashing Passwords with `bcryptjs`
- `bcryptjs` is a module used to **hash passwords** before saving them into the database.
- When a user logs in:
  - The entered password is hashed and compared with the stored hash in the DB.
  - This ensures **security**, since the raw password is never stored directly in the database.

---

✅ **In summary**:
- Passport manages sessions → login, store `user.id`, and check session on future requests.
- `bcryptjs` hashes passwords before saving and during login verification.
