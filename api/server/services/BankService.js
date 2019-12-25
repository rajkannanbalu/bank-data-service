import database from '../src/models';
import paginate from '../utils/DBUtils';

class BankService {
  static async getBanksDetailsByIFSC(ifsc) {
    try {
      return await database.branches.findOne({
          include: [
              database.banks
          ],
          where: {ifsc: ifsc}
      });
    } catch (error) {
      throw error;
    }
  }

  static async getBranches(filter) {
    try {
      return await database.branches.findAll({
          include: {
              model: database.banks,   
              attributes: { exclude: ['id'] },
              where: {name: filter.bankName}
          },
          where: {city: filter.city},
          attributes: { exclude: ['bank_id'] },
          ...paginate(filter.page, filter.size)
      });
    } catch (error) {
      throw error;
    }
  }
  
}

export default BankService;
