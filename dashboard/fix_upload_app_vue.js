const fs = require('fs');
const path = '/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupA/dashboard/src/App.vue';
let content = fs.readFileSync(path, 'utf8');

const jsInjection = `
const projectUploadType = ref('link');
const projectLink = ref('');
const projectFile = ref(null);
const projectUploadStatus = ref('');
const projectUploadMessage = ref('');
const isUploading = ref(false);

const handleProjectFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    if (!file.name.endsWith('.aia')) {
      projectUploadMessage.value = 'Hanya menerima file berekstensi .aia';
      projectUploadStatus.value = 'error';
      e.target.value = null;
      projectFile.value = null;
      return;
    }
    projectFile.value = file;
    projectUploadStatus.value = '';
    projectUploadMessage.value = '';
  }
};

const submitProject = async () => {
  if (projectUploadType.value === 'link') {
    if (!projectLink.value.startsWith('https://gallery.appinventor.mit.edu/?galleryid')) {
      projectUploadStatus.value = 'error';
      projectUploadMessage.value = 'Link galeri tidak valid. Pastikan formatnya https://gallery.appinventor.mit.edu/?galleryid...';
      return;
    }
    isUploading.value = true;
    try {
      saveProgress('Project1_Code', projectLink.value);
      projectUploadStatus.value = 'success';
      projectUploadMessage.value = 'Link project berhasil disimpan!';
    } catch (e) {
      projectUploadStatus.value = 'error';
      projectUploadMessage.value = 'Gagal menyimpan: ' + e.message;
    } finally {
      isUploading.value = false;
    }
  } else {
    if (!projectFile.value) {
      projectUploadStatus.value = 'error';
      projectUploadMessage.value = 'Silakan pilih file .aia terlebih dahulu';
      return;
    }
    isUploading.value = true;
    projectUploadStatus.value = '';
    projectUploadMessage.value = 'Sedang mengunggah file... mohon tunggu';
    
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64Data = e.target.result;
      const fileNameStr = \`\${studentData.value.name}_\${studentData.value.school}_grupA_mini project A_\${projectFile.value.name}\`;
      
      const payload = {
        Group: 'gms2a',
        Students_Email: studentData.value.email,
        Students_Name: studentData.value.name,
        Students_School: studentData.value.school,
        fileData: base64Data,
        fileName: fileNameStr,
        mimeType: 'application/octet-stream',
        fileColumn: 'Project1_Code'
      };
      
      try {
        const response = await fetch(APP_SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }
        });
        const result = await response.json();
        if (result.success) {
          projectUploadStatus.value = 'success';
          projectUploadMessage.value = 'File project berhasil diunggah!';
          saveProgress('Project1_Code', 'uploaded_aia'); 
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        projectUploadStatus.value = 'error';
        projectUploadMessage.value = 'Gagal mengunggah: ' + err.message;
      } finally {
        isUploading.value = false;
      }
    };
    reader.onerror = () => {
      projectUploadStatus.value = 'error';
      projectUploadMessage.value = 'Gagal membaca file';
      isUploading.value = false;
    };
    reader.readAsDataURL(projectFile.value);
  }
};
`;

content = content.replace('const syncToSheets = async () => {', jsInjection + '\nconst syncToSheets = async () => {');

const htmlInjection = `
          <div class="project-upload-area" v-if="currentStep === 2" style="background: white; border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h3 style="margin-top: 0; color: var(--color-primary-dark); font-size: 1.25rem;">Pengumpulan Mini Project Form Aman</h3>
            <p style="color: var(--color-text-light); margin-bottom: 20px;">Silakan kumpulkan project MIT App Inventor milikmu di sini. Kamu bisa memasukkan link galeri MIT App Inventor atau mengunggah file .aia kamu.</p>
            
            <div style="margin-bottom: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin-top:0; font-weight: 600; color: #334155;">Bingung cara buat link galeri atau download .aia?</p>
              <a href="https://youtu.be/TfUGR1dKGa8?si=NRLWkXvCHbWa4BsW" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; color: #2563eb; text-decoration: none; font-weight: 500; margin-top: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                Tonton Video Tutorial
              </a>
            </div>

            <div style="display: flex; gap: 16px; margin-bottom: 24px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="radio" v-model="projectUploadType" value="link" name="uploadType">
                Link Galeri MIT App
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="radio" v-model="projectUploadType" value="file" name="uploadType">
                Upload File (.aia)
              </label>
            </div>

            <div v-if="projectUploadType === 'link'" style="margin-bottom: 20px;">
              <label style="display: block; font-weight: 500; margin-bottom: 8px; color: var(--color-text);">Link Galeri MIT App Inventor</label>
              <input type="text" v-model="projectLink" placeholder="https://gallery.appinventor.mit.edu/?galleryid=..." style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-family: inherit;">
            </div>

            <div v-if="projectUploadType === 'file'" style="margin-bottom: 20px;">
              <label style="display: block; font-weight: 500; margin-bottom: 8px; color: var(--color-text);">Pilih file .aia kamu</label>
              <input type="file" accept=".aia" @change="handleProjectFileChange" style="width: 100%; padding: 10px; border: 1px dashed var(--color-border); border-radius: 8px; background: #f8fafc; cursor: pointer;">
            </div>

            <button @click="submitProject" :disabled="isUploading" style="background: var(--color-primary); color: white; padding: 12px 24px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; transition: opacity 0.2s;" :style="{ opacity: isUploading ? 0.7 : 1 }">
              <span v-if="isUploading" class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></span>
              {{ isUploading ? 'Sedang Mengunggah...' : 'Kumpulkan Project' }}
            </button>

            <div v-if="projectUploadMessage" :style="{ marginTop: '16px', padding: '12px', borderRadius: '8px', fontSize: '0.9rem', backgroundColor: projectUploadStatus === 'error' ? '#fef2f2' : '#f0fdf4', color: projectUploadStatus === 'error' ? '#b91c1c' : '#15803d', border: '1px solid', borderColor: projectUploadStatus === 'error' ? '#fca5a5' : '#bbf7d0' }">
              {{ projectUploadMessage }}
            </div>
          </div>
`;

content = content.replace('<div class="reading-container" v-if="data.summaryHtml">', htmlInjection + '\n          <div class="reading-container" v-if="data.summaryHtml">');

fs.writeFileSync(path, content, 'utf8');
