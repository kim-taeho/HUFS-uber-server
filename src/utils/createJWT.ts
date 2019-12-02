import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
    const token = jwt.sign({
        id: id
    }, "AsdflDksadgkdfjSksdjaf=asdodfjdsfadfj");
    return token;
};

export default createJWT;