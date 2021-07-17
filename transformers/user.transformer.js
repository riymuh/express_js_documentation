const UserTransfomer;

UserTransfomer.collection = (users, result) => {
    var result = [];
    var transformData = [];

    users.forEach((element) => {
      var singleData = {
        id: element.id,
        name: element.name,
        email: element.email,
        phone: element.phone,
      };
      transformData.push(singleData);
    });

    result = {
      param: null,
      status: true,
      result: transformData,
    };
};

module.exports = UserTransfomer;
