class ApiFeatures {
        constructor(query, queryStr) {
                this.query = query
                this.queryStr = queryStr
        }

        search() {
                const keyword = this.queryStr.keyword ? {
                        $or: [{ name: { $regex: `${this.queryStr.keyword}`, $options: 'i' } }, { tags: { $regex: `${this.queryStr.keyword}`, $options: 'i' } }]
                } : {}
                this.query = this.query.find({ ...keyword })
                return this;
        }

        filter() {

                const QueryCopy = { ...this.queryStr }

                // Some Fields Are Removing For Category
                const removeFeilds = ["keyword", "page", "limit"]
                removeFeilds.forEach(element => delete QueryCopy[element]);

                let queryStr = JSON.stringify(QueryCopy)

                const regex = /\b(gt|gte|lt|lte|in)\b/g;
                queryStr = queryStr.replace(regex, '$$' + "$1");

                queryStr = (JSON.parse(queryStr))

                this.query = this.query.find(queryStr)
                return this
        }
        pagination(resultPerPage) {

                const curruntPage = Number(this.queryStr.page) || 1
                const skip = resultPerPage * (curruntPage - 1)

                this.query = this.query.limit(resultPerPage).skip(skip)
                return this
        }
}

module.exports = ApiFeatures