package KBChallenge.BackEnd.PloggingMate.account.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignInReq {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Length(min=8, max= 50)
    private String password;

}
