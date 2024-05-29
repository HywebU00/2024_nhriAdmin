<template>
  <v-card>
    <div class="example-full fileUploadComp">
      <v-card-title>
        <v-row>
          <v-col cols="4">
            <h4 class="mt-3 mb-3">上傳檔案</h4>
          </v-col>

          <v-col cols="8" class="text-right">
            <v-btn color="blue-grey-lighten-4" @click="handleClose"> <Icon icon="mingcute:close-fill" style="font-size: 16px" /> </v-btn
          ></v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <div class="upload" v-show="!isOption">
          <div class="table-responsive">
            <v-table class="cellTable overflowVisible">
              <thead class="bg-thead">
                <tr>
                  <th>檔名</th>
                  <th>大小(KB)</th>
                  <th>狀態</th>
                  <th>執行</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!files.length">
                  <td colspan="9">
                    <div class="text-center p-5">
                      <h4>拖移檔案至此<br />or</h4>
                      <label :for="name" class="btn btn-lg btn-primary">選擇檔案</label>
                    </div>
                  </td>
                </tr>
                <tr v-for="(file, index) in files" :key="file.id">
                  <td>
                    <div class="filename">
                      {{ file.name }}
                    </div>
                    <div class="progress" v-if="file.active || file.progress !== '0.00'">
                      <div :class="{ 'progress-bar ': true, 'progress-bar-striped': true, 'bg-danger': file.error, 'progress-bar-animated': file.active }" role="progressbar" :style="{ width: file.progress + '%' }">{{ file.progress }}%</div>
                    </div>
                  </td>
                  <!-- <td>{{ file.width || 0 }}</td>
                                    <td>{{ file.height || 0 }}</td> -->
                  <td>{{ $formatSize(file.size) }}</td>
                  <!-- <td>{{ $formatSize(file.speed) }}</td> -->

                  <td v-if="file.error">
                    <!-- {{ file.error }} -->
                    失敗
                  </td>
                  <td v-else-if="file.success">成功</td>
                  <td v-else-if="file.active">執行中</td>
                  <td v-else></td>
                  <td>
                    <v-menu class="fileUpList" transition="slide-y-transition">
                      <template v-slot:activator="{ props }">
                        <v-btn size="small" class="ma-1 bg-grey-darken-2" v-bind="props">動作</v-btn>
                      </template>
                      <v-list>
                        <v-list-item>
                          <v-list-item-title>
                            <a :class="{ 'dropdown-item': true, disabled: file.active || file.success || file.error === 'compressing' || file.error === 'image parsing' }" href="#" @click.prevent="file.active || file.success || file.error === 'compressing' ? false : onEditFileShow(file)"> 編輯 </a>
                          </v-list-item-title>
                          <v-list-item-title>
                            <a :class="{ 'dropdown-item': true, disabled: !file.active }" href="#" @click.prevent="file.active ? $refs.upload.update(file, { error: 'cancel' }) : false"> 取消 </a>
                            <a class="dropdown-item" href="#" v-if="file.active" @click.prevent="$refs.upload.update(file, { active: false })"> 跳過 </a>
                          </v-list-item-title>
                          <v-list-item-title>
                            <a class="dropdown-item" href="#" v-if="file.active" @click.prevent="$refs.upload.update(file, { active: false })"> 跳過 </a>
                            <a class="dropdown-item" href="#" v-else-if="file.error && file.error !== 'compressing' && file.error !== 'image parsing' && $refs.upload.features.html5" @click.prevent="$refs.upload.update(file, { active: true, error: '', progress: '0.00' })"> 重傳 </a>
                            <a
                              :class="{ 'dropdown-item': true, disabled: file.success || file.error === 'compressing' || file.error === 'image parsing' }"
                              href="#"
                              v-else
                              @click.prevent="file.success || file.error === 'compressing' || file.error === 'image parsing' ? false : $refs.upload.update(file, { active: true })"
                              >上傳</a
                            >
                          </v-list-item-title>
                          <v-list-item-title> <a class="dropdown-item" href="#" @click.prevent="$refs.upload.remove(file)">移除</a></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <!-- <div class="btn-group">
                      <button class="btn ma-2 bg-grey-lighten-2 btn-sm dropdown-toggle" type="button">動作</button>
                      <div class="dropdown-menu">
                        <a :class="{ 'dropdown-item': true, disabled: file.active || file.success || file.error === 'compressing' || file.error === 'image parsing' }" href="#" @click.prevent="file.active || file.success || file.error === 'compressing' ? false : onEditFileShow(file)"> 編輯 </a>
                        <a :class="{ 'dropdown-item': true, disabled: !file.active }" href="#" @click.prevent="file.active ? $refs.upload.update(file, { error: 'cancel' }) : false"> 取消 </a>
                        <a class="dropdown-item" href="#" v-if="file.active" @click.prevent="$refs.upload.update(file, { active: false })"> 跳過 </a>
                        <a class="dropdown-item" href="#" v-else-if="file.error && file.error !== 'compressing' && file.error !== 'image parsing' && $refs.upload.features.html5" @click.prevent="$refs.upload.update(file, { active: true, error: '', progress: '0.00' })"> 重傳 </a>
                        <a
                          :class="{ 'dropdown-item': true, disabled: file.success || file.error === 'compressing' || file.error === 'image parsing' }"
                          href="#"
                          v-else
                          @click.prevent="file.success || file.error === 'compressing' || file.error === 'image parsing' ? false : $refs.upload.update(file, { active: true })"
                          >上傳</a
                        >

                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" @click.prevent="$refs.upload.remove(file)">移除</a>
                      </div>
                    </div> -->
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
          <div class="example-foorer">
            <!-- <div class="footer-status float-right">
                            Drop: {{ $refs.upload ? $refs.upload.drop : false }},
                            Active: {{ $refs.upload ? $refs.upload.active : false }},
                            Uploaded: {{ $refs.upload ? $refs.upload.uploaded : true }},
                            Drop active: {{ $refs.upload ? $refs.upload.dropActive : false }}
                        </div> -->
            <div class="btn-group">
              <file-upload
                class="v-btn bg-red-lighten-1 mr-2"
                :post-action="postAction"
                :accept="accept"
                :multiple="multiple"
                :directory="directory"
                :create-directory="createDirectory"
                :size="size || 0"
                :thread="thread < 1 ? 1 : thread > 5 ? 5 : thread"
                :headers="headers"
                :data="data"
                :drop="drop"
                :drop-directory="dropDirectory"
                :add-index="addIndex"
                v-model="files"
                @input-filter="inputFilter"
                @input-file="inputFile"
                ref="upload"
              >
                <i class="fa fa-plus"></i>
                選擇檔案
              </file-upload>
              <!-- <div class="dropdown-menu">
                                <label class="dropdown-item" :for="name">Add files</label>
                                <a class="dropdown-item" href="#" @click="onAddFolder">Add folder</a>
                                <a class="dropdown-item" href="#" @click.prevent="addData.show = true">Add data</a>
                            </div> -->
            </div>
            <v-btn class="" color="success" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
              <!-- <i class="fa fa-arrow-up" aria-hidden="true"></i> -->
              <Icon icon="mdi-arrow-up" style="font-size: 24px" />
              開始上傳
            </v-btn>
            <v-btn class="ml-2" color="danger" v-else @click.prevent="$refs.upload.active = false">
              <!-- <i class="fa fa-stop" aria-hidden="true"></i> -->
              <Icon icon="mdi-stop" style="font-size: 24px" />
              停止上傳
            </v-btn>

            <v-btn class="ml-2" color="blue-darken-1" variant="elevated" @click="handleSubmit" :disabled="!attachListLocal">
              <Icon icon="mdi-file" style="font-size: 24px" />
              儲存檔案
            </v-btn>
          </div>
        </div>
        <v-table class="cellTable overflowVisible" v-if="attachListLocal">
          <thead class="bg-thead">
            <tr>
              <th>檔名</th>
              <th>大小(KB)</th>
              <th>上傳日期</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(attach, attachIndex) in attachListLocal" :key="attachIndex">
              <td>
                <a href="javascript:void(0)" style="color: black" @click="$gf.downloadAttachUtil(attach.uuid, attach.name)"> {{ attach.name }}</a>
              </td>
              <td>{{ (attach.imageSize / 1000).toFixed(2) }}</td>
              <td>{{ $gf.momentUtil(attach.modifyDate, 'YYYY/MM/DD HH:mm:ss') }}</td>

              <td>
                <v-tooltip text="刪除">
                  <template v-slot:activator="{ props }">
                    <span
                      class="mr-3"
                      v-bind="props"
                      @click="
                        dialogRemove = true;
                        removeId = attach.uuid;
                      "
                    >
                      <!-- <Icon icon="mdi:account-supervisor" style="font-size: 24px;" /> -->
                      <Icon icon="mdi:garbage" style="font-size: 24px" /> </span></template
                ></v-tooltip>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>

      <div :class="{ 'modal-backdrop': true, fade: true, show: addData.show }"></div>
      <div :class="{ modal: true, fade: true, show: addData.show }" id="modal-add-data" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add data</h5>
              <button type="button" class="close" @click.prevent="addData.show = false">
                <span>&times;</span>
              </button>
            </div>
            <form @submit.prevent="onAddData">
              <div class="modal-body">
                <div class="form-group">
                  <label for="data-name">Name:</label>
                  <input type="text" class="form-control" required id="data-name" placeholder="Please enter a file name" v-model="addData.name" />
                  <small class="form-text text-muted">Such as <code>filename.txt</code></small>
                </div>
                <div class="form-group">
                  <label for="data-type">Type:</label>
                  <input type="text" class="form-control" required id="data-type" placeholder="Please enter the MIME type" v-model="addData.type" />
                  <small class="form-text text-muted">Such as <code>text/plain</code></small>
                </div>
                <div class="form-group">
                  <label for="content">Content:</label>
                  <textarea class="form-control" required id="content" rows="3" placeholder="Please enter the file contents" v-model="addData.content"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click.prevent="addData.show = false">Close</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div :class="{ 'modal-backdrop': true, fade: true, show: editFile.show }"></div>
      <div :class="{ modal: true, fade: true, show: editFile.show }" id="modal-edit-file" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit file</h5>
              <button type="button" class="close" @click.prevent="editFile.show = false">
                <span>&times;</span>
              </button>
            </div>
            <form @submit.prevent="onEditorFile">
              <div class="modal-body">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" required id="name" placeholder="Please enter a file name" v-model="editFile.name" />
                </div>
                <div class="form-group" v-if="editFile.show && editFile.blob && editFile.type && editFile.type.substr(0, 6) === 'image/'">
                  <label>Image: </label>
                  <div class="edit-image">
                    <img :src="editFile.blob" ref="editImage" />
                  </div>

                  <div class="edit-image-tool">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-primary" @click="editFile.cropper.rotate(-90)" title="cropper.rotate(-90)"><i class="fa fa-undo" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-primary" @click="editFile.cropper.rotate(90)" title="cropper.rotate(90)"><i class="fa fa-repeat" aria-hidden="true"></i></button>
                    </div>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-primary" @click="editFile.cropper.crop()" title="cropper.crop()"><i class="fa fa-check" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-primary" @click="editFile.cropper.clear()" title="cropper.clear()"><i class="fa fa-remove" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click.prevent="editFile.show = false">Close</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </v-card>
  <div v-if="dialogRemove">
    <v-dialog v-model="dialogRemove">
      <confirmComponents :dialogConfirm="dialogRemove" :confirmItem="$gm.getModel('comfirmItemRemove')" v-on:childDialog="parentDialog" v-on:handleConfirm="handleRemove"> </confirmComponents>
    </v-dialog>
  </div>
</template>
<style>
.example-full .btn-group .dropdown-menu {
  display: block;
  visibility: hidden;
  transition: all 0.2s;
}
.example-full .btn-group:hover > .dropdown-menu {
  visibility: visible;
}

.example-full label.dropdown-item {
  margin-bottom: 0;
}

.example-full .btn-group .dropdown-toggle {
  margin-right: 0.6rem;
}

.td-image-thumb {
  max-width: 4em;
  max-height: 4em;
}

.example-full .filename {
  margin-bottom: 0.3rem;
}

.example-full .btn-is-option {
  margin-top: 0.25rem;
}

.example-full .example-foorer {
  padding: 0.5rem 0;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

.example-full .edit-image img {
  max-width: 100%;
}

.example-full .edit-image-tool {
  margin-top: 0.6rem;
}

.example-full .edit-image-tool .btn-group {
  margin-right: 0.6rem;
}

.example-full .footer-status {
  padding-top: 0.4rem;
}

.example-full .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}

.example-full .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>

<script>
import Cropper from 'cropperjs';
import ImageCompressor from '@xkeshi/image-compressor';
import FileUpload from 'vue-upload-component';
import confirmComponents from '@/components/system/common/confirmComponents.vue';
import { useAppApiDataStore } from '@/pinia/app-api-data';
const appApiData = useAppApiDataStore();
export default {
  components: {
    FileUpload,
    confirmComponents,
  },
  computed: {
    putAction() {
      const path = appApiData.apiServerUrl + 'nhri/fileUpload/uploadAttachmentsServlet?showContent=false&groupId=' + this.timestamp + '&modifyName=' + appApiData.loginInfoUser.userId;
      return path;
    },
    postAction() {
      const path = appApiData.apiServerUrl + 'nhri/fileUpload/uploadAttachmentsServlet?showContent=false&groupId=' + this.timestamp + '&modifyName=' + appApiData.loginInfoUser.userId;
      return path;
    },
  },
  props: {
    targetType: {},
    targetUuid: {},
    attachList: {},
  },
  data() {
    return {
      dialog2: false,
      files: [],
      accept: '',
      // accept: '.pdf',
      // extensions: 'gif,jpg,jpeg,png,webp',
      // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
      // extensions: /\.(gif|jpe?g|png|webp)$/i,
      extensions: '*',
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      createDirectory: false,
      addIndex: false,
      thread: 3,
      name: 'file',
      // postAction: '/upload/post',
      // putAction: '/upload/put',
      // headers: {
      //     'X-Csrf-Token': 'xxxx',
      // },
      headers: {
        Authorization: appApiData.apiToken,
      },
      data: {
        // '_csrf_token': 'xxxxxx',
      },

      autoCompress: 1024 * 1024,
      uploadAuto: false,
      isOption: false,

      addData: {
        show: false,
        name: '',
        type: '',
        content: '',
      },

      editFile: {
        show: false,
        name: '',
      },
      timestamp: new Date().getTime(),
      attachListLocal: null,
      removeId: null,
      dialogRemove: null,
    };
  },

  watch: {
    'editFile.show'(newValue, oldValue) {
      // 关闭了 自动删除 error
      if (!newValue && oldValue) {
        this.$refs.upload.update(this.editFile.id, { error: this.editFile.error || '' });
      }

      if (newValue) {
        this.$nextTick(() => {
          if (!this.$refs.editImage) {
            return;
          }
          let cropper = new Cropper(this.$refs.editImage, {
            autoCrop: false,
          });
          this.editFile = {
            ...this.editFile,
            cropper,
          };
        });
      }
    },

    'addData.show'(show) {
      if (show) {
        this.addData.name = '';
        this.addData.type = '';
        this.addData.content = '';
      }
    },
  },

  methods: {
    handleClose() {
      this.$emit('childDialog');
    },
    handleReload() {
      this.$emit('callReload');
    },
    handleSubmit() {
      const vm = this;
      const data = [
        { key: 'groupId', value: vm.timestamp },
        { key: 'targetType', value: vm.targetType },
        { key: 'targetUuid', value: vm.targetUuid },
      ];
      appApiData.postByQueryMulti('addAttachments', data, true, false).then((result) => {
        vm.files = [];
        vm.$gf.getAttachListUtil(vm.targetType, vm.targetUuid, false, true).then((result) => {
          vm.attachListLocal = result;
        });
        vm.handleReload();
      });
    },
    handleRemove() {
      const vm = this;
      const data = { key: 'attachmentUuid', value: vm.removeId };
      appApiData.deleteByQuery('deleteAttachment', data, vm.removeId, true, false).then((result) => {
        vm.$gf.getAttachListUtil(vm.targetType, vm.targetUuid, false, true).then((result) => {
          vm.attachListLocal = result;
          vm.dialogRemove = false;
        });
        vm.handleReload();
      });
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前

        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }

        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name) && newFile.type !== 'text/directory') {
          return prevent();
        }

        // Automatic compression
        // 自动压缩
        if (newFile.file && newFile.error === '' && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
          newFile.error = 'compressing';
          const imageCompressor = new ImageCompressor(null, {
            convertSize: 1024 * 1024,
            maxWidth: 512,
            maxHeight: 512,
          });
          imageCompressor
            .compress(newFile.file)
            .then((file) => {
              this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type });
            })
            .catch((err) => {
              this.$refs.upload.update(newFile, { error: err.message || 'compress' });
            });
        }
      }

      if (newFile && newFile.error === '' && newFile.file && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = '';
        let URL = window.URL || window.webkitURL;
        if (URL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }

        // Thumbnails
        // 缩略图
        newFile.thumb = '';
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob;
        }
      }

      // image size
      // image 尺寸
      if (newFile && newFile.error === '' && newFile.type.substr(0, 6) === 'image/' && newFile.blob && (!oldFile || newFile.blob !== oldFile.blob)) {
        newFile.error = 'image parsing';
        let img = new Image();
        img.onload = () => {
          this.$refs.upload.update(newFile, { error: '', height: img.height, width: img.width });
        };
        img.οnerrοr = (e) => {
          this.$refs.upload.update(newFile, { error: 'parsing image size' });
        };
        img.src = newFile.blob;
      }
    },

    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update

        if (newFile.active && !oldFile.active) {
          // beforeSend

          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize && newFile.type !== 'text/directory') {
            this.$refs.upload.update(newFile, { error: 'size' });
          }
        }

        if (newFile.progress !== oldFile.progress) {
          // progress
        }

        if (newFile.error && !oldFile.error) {
          // error
        }

        if (newFile.success && !oldFile.success) {
          // success
        }
      }

      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }

      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    },

    alert(message) {
      alert(message);
    },

    onEditFileShow(file) {
      this.editFile = { ...file, show: true };
      this.$refs.upload.update(file, { error: 'edit' });
    },

    onEditorFile() {
      if (!this.$refs.upload.features.html5) {
        this.alert('Your browser does not support');
        this.editFile.show = false;
        return;
      }

      let data = {
        name: this.editFile.name,
        error: '',
      };
      if (this.editFile.cropper) {
        let binStr = atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(',')[1]);
        let arr = new Uint8Array(binStr.length);
        for (let i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i);
        }
        data.file = new File([arr], data.name, { type: this.editFile.type });
        data.size = data.file.size;
      }
      this.$refs.upload.update(this.editFile.id, data);
      this.editFile.error = '';
      this.editFile.show = false;
    },

    // add folder
    onAddFolder() {
      if (!this.$refs.upload.features.directory) {
        this.alert('Your browser does not support');
        return;
      }
      let input = document.createElement('input');
      input.style = 'background: rgba(255, 255, 255, 0);overflow: hidden;position: fixed;width: 1px;height: 1px;z-index: -1;opacity: 0;';
      input.type = 'file';
      input.setAttribute('allowdirs', true);
      input.setAttribute('directory', true);
      input.setAttribute('webkitdirectory', true);
      input.multiple = true;
      document.querySelector('body').appendChild(input);
      input.click();
      input.onchange = (e) => {
        this.$refs.upload.addInputFile(input).then(function () {
          document.querySelector('body').removeChild(input);
        });
      };
    },

    onAddData() {
      this.addData.show = false;
      if (!this.$refs.upload.features.html5) {
        this.alert('Your browser does not support');
        return;
      }

      let file = new window.File([this.addData.content], this.addData.name, {
        type: this.addData.type,
      });
      this.$refs.upload.add(file);
    },
  },
  beforeMount() {
    const vm = this;
    if (vm.attachList) vm.attachListLocal = JSON.parse(JSON.stringify(vm.attachList));
  },
};
</script>
<style>
blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}

.modal-backdrop.fade {
  visibility: hidden;
}

.modal-backdrop.fade.show {
  visibility: visible;
}

.fade.show {
  display: block;
  z-index: 1072;
}

.source-code {
  font-size: 2em;
  font-weight: bold;
  color: #f00;
}
</style>
