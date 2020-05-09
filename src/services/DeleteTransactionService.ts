import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    try {
      await transactionsRepository.delete({ id });
    } catch (err) {
      throw new AppError('Transaction ID is invalid!');
    }
  }
}

export default DeleteTransactionService;
