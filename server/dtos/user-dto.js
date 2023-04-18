// date transfer object

module.exports = class UserDto {
    email
    id
    isActivated

    constructor(model) {
        this.email = model.email
        this.id = model._id //mongo добавляет _ подчеркивание
        this.isActivated = model.isActivated
    }

}