const roomList = [
  { roomId: "P101", roomType: "Standard", pricePerNight: 1000000, status: "VACANT" },
  { roomId: "P102", roomType: "Deluxe", pricePerNight: 1800000, status: "VACANT" },
  { roomId: "P103", roomType: "Superior", pricePerNight: 1200000, status: "MAINTENANCE" }
];

function displayRooms(title) {
  console.log("\n================ " + title + " ================");
  console.table(roomList);
}

displayRooms("DANH SÁCH PHÒNG BAN ĐẦU");

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};
roomList.push(newRoom);
console.log("-> Đã thêm thành công phòng P104.");
displayRooms("DANH SÁCH SAU KHI THÊM PHÒNG P104");

const searchRoomId = "P101";
let foundRoom = null;

for (let i = 0; i < roomList.length; i++) {
  if (roomList[i].roomId === searchRoomId) {
    foundRoom = roomList[i];
    break;
  }
}

if (foundRoom) {
  console.log("-> Đã tìm thấy phòng " + searchRoomId + ":", foundRoom);
} else {
  console.log("-> Không tìm thấy phòng có mã: " + searchRoomId);
}

const updateRoomId = "P101";
let isUpdated = false;

for (let i = 0; i < roomList.length; i++) {
  if (roomList[i].roomId === updateRoomId) {
    roomList[i].status = "OCCUPIED";
    isUpdated = true;
    break;
  }
}

if (isUpdated) {
  console.log("-> Đã cập nhật trạng thái phòng " + updateRoomId + " thành OCCUPIED.");
} else {
  console.log("-> Cập nhật thất bại, không tìm thấy phòng " + updateRoomId);
}
displayRooms("DANH SÁCH SAU KHI CẬP NHẬT PHÒNG P101");

const deleteRoomId = "P103";
let deleteIndex = -1;

for (let i = 0; i < roomList.length; i++) {
  if (roomList[i].roomId === deleteRoomId) {
    deleteIndex = i;
    break;
  }
}

if (deleteIndex !== -1) {
  roomList.splice(deleteIndex, 1);
  console.log("-> Đã xóa thành công phòng " + deleteRoomId + " khỏi hệ thống.");
} else {
  console.log("-> Xóa thất bại, không tìm thấy phòng " + deleteRoomId);
}
displayRooms("DANH SÁCH SAU KHI XÓA PHÒNG P103");
