const paginate = ( page, pageSize ) => {
        const offset = page * pageSize;
        const limit = pageSize;
      
        return {          
          offset,
          limit,
        };
      };

export default paginate;