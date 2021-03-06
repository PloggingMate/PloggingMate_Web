package KBChallenge.BackEnd.PloggingMate.park;

import KBChallenge.BackEnd.PloggingMate.park.dto.CreateParkReq;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;


import java.nio.charset.StandardCharsets;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class ParkControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @DisplayName("공원 정보 등록 API")
    @Test
    public void testCreateParkApi() throws Exception {

        MockMultipartFile mockMultipartFile = new MockMultipartFile("file","제102호 어린이공원.jpg", "image/jpeg", "<<jpeg data>>".getBytes());
        String content = objectMapper.writeValueAsString(new CreateParkReq("제102호 어린이공원","경기도 용인시 수지구 죽전동 1484번지 일원"));
        MockMultipartFile mockContent = new MockMultipartFile("content","CreateParkReq","application/json",content.getBytes(StandardCharsets.UTF_8));

        mockMvc.perform(multipart("/app/park")
                .file(mockMultipartFile)
                .file(mockContent)
                .contentType(MediaType.MULTIPART_MIXED)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());
    }
}