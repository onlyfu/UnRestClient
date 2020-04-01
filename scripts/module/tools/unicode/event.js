/**
 * Created by Yuiitsu on 2020/03/27.
 */
App.event.extend('tools.unicode', function() {
    //
    let self = this;
    /**
     * 执行事件监听
     */
    this.event = {
        autoDisplayPretty: function() {
            $('.js-main-container-tools').on('input', '.tools-unicode-textarea', function() {
                Model.set('tools.unicode', $(this).val());
            });
        }
    }
});
 