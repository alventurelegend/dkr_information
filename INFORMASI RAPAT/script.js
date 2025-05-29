document.addEventListener('DOMContentLoaded', () => {
    // Mengubah warna poin rapat saat diklik (sederhana)
    const meetingPoints = document.querySelectorAll('.meeting-point');
    meetingPoints.forEach(point => {
        point.addEventListener('click', () => {
            // Toggle class untuk efek klik yang lebih bagus
            point.classList.toggle('clicked');
            // Jika Anda hanya ingin mengubah warna:
            // point.style.backgroundColor = '#cfe2f3';
        });
    });

    // Script untuk mengatur tanggal otomatis
    const meetingDateElement = document.getElementById('meeting-date');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    meetingDateElement.textContent = `Pertemuan Mingguan | ${today.toLocaleDateString('id-ID', options)}`;

    // Untuk mengganti tanggal di judul halaman (tab browser)
    document.title = `Hasil Rapat Dewan Kerja Ranting - ${today.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}`;
});