export function areCredentialsEmpty(name, password) {
    return !name.trim() || !password.trim();
  }