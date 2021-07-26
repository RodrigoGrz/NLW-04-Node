import { Request, Response } from 'express';

class UserController {

    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        console.log(name, email);

        return response.send()
    }
}

export { UserController };