function Services() {
    this.fetchData = function() {
        /**
         * Axios trả về đối tượng Promise
         * -pending (chờ)
         * -resolve (thành công)
         * -reject (thất bại)
         */
        return axios({
                //key: value
                url: "https://625569258646add390d66a94.mockapi.io/api/products",
                method: "GET",
            })
            // .then(function(result) {})
            // .catch(function(error) {
            //     console.log(error.data);
            // });
    }
}