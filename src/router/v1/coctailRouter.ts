import { CoctailService } from "../../application/services";
import { createCoctailRouter } from "../../infrastructure/controllers";
import { ApiCoctailRepository } from "../../infrastructure/repositories";

const repo = new ApiCoctailRepository();
const service = new CoctailService(repo);
export const coctailRouter = createCoctailRouter(service);