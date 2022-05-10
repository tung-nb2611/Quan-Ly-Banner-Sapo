package com.banner_management.backend.controller;

import com.banner_management.backend.entity.user.User;

import com.banner_management.backend.payload.response.MessageResponse;
import com.banner_management.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    // lấy danh sách các User
    @GetMapping("/users")
    public List<User> listUser() {
        return userService.listAllUser();
    }

    // lấy một User theo id
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        try{
            User user = userService.getById(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/users/check_username/{username}")
    public int checkUsername(@PathVariable String username) {
        return userService.checkUsernameExist(username);
// \       return +username+"1";
    }

    @GetMapping("/users/check_email/{email}")
    public int checkEmail(@PathVariable String email) {
        return userService.checkEmailExist(email);
    }
//    // tạo mới một User
//    @PostMapping("/users")
//    public ResponseEntity<User> addUser(@RequestBody User user){
//        try {
//            userService.save(user);
//            return new ResponseEntity<User>(user, HttpStatus.OK);
//        }catch (NoSuchElementException e){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }




    // cập nhật một User theo id
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUserById (@RequestBody User user, @PathVariable Long id){
        try{
            User existUserEntity = userService.getById(id);
            user.setId(id);
            userService.save(user);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Xoá một User theo id
    @DeleteMapping("/users/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable Long id){
        try{
            userService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // Lay thong tin theo trang
    @GetMapping("/users/page/{number}")
    public ResponseEntity<Page<User>> getBannerPage(@PathVariable(value="number") int number){
        try{
            Page<User> users = userService.getUserPage(number);
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}