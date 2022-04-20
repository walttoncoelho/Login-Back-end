import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
    const salt = await bcrypt.genSalt(8);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
    }