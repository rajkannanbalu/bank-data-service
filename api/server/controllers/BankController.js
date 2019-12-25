import BankService from '../services/BankService';
import Util from '../utils/Utils';
import _ from 'lodash';

const util = new Util();


class BankController {
    static async getBanksDetails(req, res) {

      if (!req.query.ifsc) {
        util.setError(400, new Error('Please provide bank ifsc code'));
        return util.send(res);
      }
      
      try {
        const results = await BankService.getBanksDetailsByIFSC(req.query.ifsc);
        if (results != null) {
          const bankDetails = Object.assign({}, {            
            bankId: results.bankId,
            bankName: results.bank.name,
            branch: results.branch,
            ifsc: results.ifsc,
            address: results.address,
            city: results.city,
            district: results.district,
            state: results.state,          
          })
          util.setSuccess(200, 'Bank Details retrieved', bankDetails);
        } else {
          util.setSuccess(200, 'No Bank found with given parameters');
        }
        return util.send(res);
      } catch (error) {
        util.setError(400, error);
        return util.send(res);
      }
    }
  
    static async getBankBranches(req, res) {
      if (!req.query.bankName || !req.query.city) {
        util.setError(400, new Error('Please provide both bank name and city'));
        return util.send(res);
      }
      
      const page = _.has(req.query, 'page')?req.query.page:1;
      const size = _.has(req.query, 'size')?req.query.size:10;

      
      let filter = {
          "bankName": req.query.bankName,
          "city": req.query.city,
          "page": page,
          "size": size
      }
        
      try {
        const bankBranchesList = await BankService.getBranches(filter);
        const response = {
          branches: bankBranchesList          
        }
        util.setSuccess(201, 'Bank Branches Retrieved', response);
        return util.send(res);
      } catch (error) {
        util.setError(400, error);
        return util.send(res);
      }
    }
  
  }
  
  export default BankController;